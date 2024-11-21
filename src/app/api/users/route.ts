import prisma from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";
import UserSchema, {UserSchemaType} from "@/app/api/users/schema";


export const GET = async () => {
    const users = await prisma.user.findMany({orderBy: {name: "asc"}});
    if (users.length === 0) {
        return NextResponse.json({error: "There is no users"}, {status: 404});
    }
    return NextResponse.json(users, {status: 200});
}

export const POST = async (request: NextRequest) => {
    const data: UserSchemaType = await request.json();

    const validation = UserSchema.safeParse(data);

    if (!validation.success) {
        return NextResponse.json({error: validation.error.format()}, {status: 400});
    }

    const userExist = await prisma.user.findUnique({where: {email: data.email}});

    if (!userExist) {
        return NextResponse.json({error: "User with this email already exists"});
    }

    const addedUser = await prisma.user.create({data});

    return NextResponse.json({message: `User added with this email: ${addedUser.email}`}, {status: 200});
}