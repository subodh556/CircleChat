import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.id) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await request.json();
        const { name, image } = body;

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id,
            },
            data: {
                image: image,
                name: name
            },
        });
        return NextResponse.json(updatedUser);
    } catch (error) {
        console.log(error, "SETTINGS_ERROR");
        return new NextResponse("Internal Error", { status: 500 });
    }
}