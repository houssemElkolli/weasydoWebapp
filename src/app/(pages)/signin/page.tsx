import SignIn from "@/app/components/SignIn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
    const session = await getServerSession();

    if (session?.user) redirect("/");
    return (
        <div>
            <SignIn />
        </div>
    );
};

export default page;
