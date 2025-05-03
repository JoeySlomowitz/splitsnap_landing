"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("@napi-rs/canvas");
var fs = require("fs");
var path = require("path");
var width = 1200;
var height = 630;
var padding = 20;
var canvas = (0, canvas_1.createCanvas)(width, height);
var context = canvas.getContext("2d");
// Background gradient (dark blue to black)
var gradient = context.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, "#0A0E2A");
gradient.addColorStop(1, "#000000");
context.fillStyle = gradient;
context.fillRect(0, 0, width, height);
// Heading: "Split Receipts in Seconds" over two lines
context.font = "bold 80px Arial"; // Use Arial (default font)
context.textAlign = "left";
context.textBaseline = "top";
// First part: "Split Receipts" in white
context.fillStyle = "#FFFFFF";
var splitReceiptsText = "Split Receipts";
context.fillText(splitReceiptsText, padding, padding);
// Second part: "in Seconds" in iOS system green (#30D158)
context.fillStyle = "#30D158";
var inSecondsText = "in Seconds";
var lineHeight = 90;
context.fillText(inSecondsText, padding, padding + lineHeight);
// Subheading: "Snap. Split. Share" in secondary color (light gray)
context.font = "50px Arial"; // Use Arial (default font)
context.fillStyle = "#A1A1A1";
context.fillText("Snap. Split. Share", padding, padding + lineHeight * 2);
// Save the image
try {
    var buffer = canvas.toBuffer("image/png");
    var outputPath = path.join(process.cwd(), "public/og-image.png");
    fs.writeFileSync(outputPath, buffer);
    console.log("OG image generated at ".concat(outputPath));
}
catch (error) {
    console.error("Error generating OG image:", error);
    process.exit(1);
}
