import Image from 'next/image'
import {date} from "zod";

export const dynamic = 'force-dynamic';

export default function Home() {
    const currentData = new Date();
    return (
        <div>date is {currentData.getTime()}</div>
    )
}
