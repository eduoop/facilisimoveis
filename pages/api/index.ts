import { NextRequest } from "next/server";

export default function handler (req: NextRequest, res: any) {
    return res.status(200).json({ name: "Eduardo" })

}