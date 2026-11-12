import json
import os
import sys
from difflib import SequenceMatcher

sys.path.insert(0, r"C:\Users\dulce\AppData\Local\Temp\ebac-ocr-tools")

import cv2
from rapidocr_onnxruntime import RapidOCR


VIDEO = r"C:\Users\dulce\Videos\OBS\2026-11-10 20-43-45.mp4"
OUTPUT = r"C:\Users\dulce\AppData\Local\Temp\ebac-transcript-ocr.json"


def normalize(text: str) -> str:
    return "".join(char.lower() for char in text if char.isalnum())


def similar(left: str, right: str) -> float:
    return SequenceMatcher(None, normalize(left), normalize(right)).ratio()


def overlapping_lines(previous: list[str], current: list[str]) -> int:
    max_size = min(len(previous), len(current), 20)
    for size in range(max_size, 1, -1):
        scores = [similar(previous[-size + index], current[index]) for index in range(size)]
        if sum(scores) / size >= 0.88 and min(scores) >= 0.70:
            return size
    return 0


cap = cv2.VideoCapture(VIDEO)
fps = cap.get(cv2.CAP_PROP_FPS)
frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
engine = RapidOCR()
frames = []
combined = []

for sample_index in range(0, 112):
    timestamp = sample_index * 0.25
    cap.set(cv2.CAP_PROP_POS_FRAMES, min(int(timestamp * fps), frame_count - 1))
    ok, image = cap.read()
    if not ok:
        continue

    transcript_panel = image[350:915, 240:915]
    result, _ = engine(transcript_panel)
    lines = []
    if result:
        for box, text, confidence in result:
            top = min(point[1] for point in box)
            if float(confidence) >= 0.65:
                lines.append((top, text))
    lines = [text for _, text in sorted(lines)]
    overlap = overlapping_lines(combined, lines)
    combined.extend(lines[overlap:])
    frames.append({"timestamp": timestamp, "lines": lines, "overlap": overlap})

cap.release()
with open(OUTPUT, "w", encoding="utf-8") as file:
    json.dump({"frames": frames, "combined": combined}, file, ensure_ascii=False, indent=2)

print(OUTPUT)
