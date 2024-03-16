import { sheetsGet } from "@/actions/sheetsGet";
import { promises as fs } from "fs";

import { google, sheets_v4 } from "googleapis";

import { z } from "zod";

export const GET = async () => {
  const credentials = await fs.readFile(
    process.cwd() + "/app/data.json",
    "utf-8"
  );
  const sheetsCredentials = JSON.parse(credentials);

  const auth = new google.auth.GoogleAuth({
    credentials: sheetsCredentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const parameters = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEETS_ID!,
    range: "A1:G1", // Specify the entire range of the sheet
  });

  const response = await sheets.spreadsheets.values
    .batchGet({
      spreadsheetId: process.env.SHEETS_ID!,
      ranges: ["A2:G5000"],
      prettyPrint: false,
    })
    .then();

  const parametersValue = parameters.data.values;

  const value = response.data.valueRanges;

  value?.forEach((valueRange, index) => {
    console.log(`Data for range ${index + 1}:`);
    const rows = valueRange.values;
    if (rows) {
      rows.forEach((row) => {
        console.log(row.join(", "));
      });
    } else {
      console.log("No data found in this range.");
    }
  });

  return Response.json({
    parameters: parametersValue,
    data: value,
  });
};
