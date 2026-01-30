import { NextResponse } from "next/server";
import { readToolkitData } from "@/app/_lib/toolkit-data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ toolkitId: string }> }
) {
  const { toolkitId } = await params;
  const data = await readToolkitData(toolkitId);

  if (!data) {
    return NextResponse.json(
      { error: `Toolkit not found: ${toolkitId}` },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
