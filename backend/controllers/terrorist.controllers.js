import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { stringify } from "csv-stringify/sync";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CSV_PATH = path.join(__dirname, '..', 'data', 'terrorData.csv');
const RESULTS_PATH = path.join(__dirname, '..', 'data', 'tester_data.json');



export function newTerrorist(req, res) {
    try {
        const filePath = path.resolve(CSV_PATH);
        const fileData = fs.readFileSync(filePath, "utf-8");
        const records = parse(fileData, {
            columns: true,
            skip_empty_lines: true
        });

        const newComplaint = {
            ...req.body,
            _id: Date.now().toString(),
            createdAt: Date.now().toString()
        };
        records.push(newComplaint);

        const output = stringify(records, {
            header: true,
            columns: Object.keys(newComplaint)
        });
        fs.writeFileSync(filePath, output);
    } catch (error) {
        res.status(500).json({ error: "Failed to save terrorist" });
    }
}
export function newTester(req, res) {
    try {
        const filePath = path.resolve(RESULTS_PATH);
        const fileData = fs.readFileSync(filePath, "utf-8");
        const complaints = JSON.parse(fileData);

        const newComplaint = {
            ...req.body,
            _id: Date.now().toString(),
            createdAt: Date.now()
        };
        complaints.push(newComplaint);
        fs.writeFileSync(filePath, JSON.stringify(complaints, null, 2));
        res.json(newComplaint);
    } catch (error) {
        res.status(500).json({ error: "Failed to save tester" });
    }
}


export async function getAllTesters(req, res) {
    try {
        const filePath = path.resolve(RESULTS_PATH);
        const fileData = fs.readFileSync(filePath, "utf-8");
        const complaints = JSON.parse(fileData);
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: "Failed to load tester data" });
    }
}

export async function getAllTerrorists(req, res) {
    try {
        const filePath = path.resolve(CSV_PATH);
        const fileData = fs.readFileSync(filePath, "utf-8");
        const records = parse(fileData, {
            columns: true,
            skip_empty_lines: true
        });
        const sliced = records.slice(0,50)
        res.json(sliced);
    } catch (error) {
        res.status(500).json({ error: "Failed to load terrorists data" });
    }
}