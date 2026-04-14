import Image from "next/image";
import Link from "next/link";


export default function PackingListPage() {
  return (
    <div className="min-h-dvh bg-yellow-200 font-mono">
        <div className="ml-25 mt-9 text-5xl text-violet-700">
            Packing List📋
        </div>
        <div className="bg-white my-12 mx-24 rounded-xl min-h-fit                        shadow-lg text-black">
            <ul className="flex flex-col gap-0.5 list-disc ml-15 mt-5 text-3xl">
                <li>
                    Clothes for 3 days and 2 nights 👕👚
                    <ul>
                        <li>Guidelines:</li>
                        <li>Shirts - no tight-fitting, low-cut, sleeveless or crop-top shirts</li>
                        <li>Pants/Bottoms - must be longer than mid-thigh, not tight-fitting</li>
                    </ul>
                </li>
                <li>Pajamas💤</li>
                <li>Earplugs (if you want)👂</li>
                <li>Eyemask (if you want)👀</li>
                <li>Hat🧢</li>
                <li>Sunscreen☀️🧴</li>
                <li>Bug spray🦟</li>
                <li>Extra cash💸: 250-300 baht for dinner and shopping at the market should be enough</li>
                <li>Sports clothes and shoes👟</li>
                <li>Notebook📓</li>
                <li>Pen🖊️</li>
                <li>Bible✝️</li>
                <li>Water bottle🚰</li>
            </ul>
        </div>
    </div>
  );
}
