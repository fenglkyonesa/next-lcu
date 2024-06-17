'use client';
import React from 'react';
import {LuHome} from "react-icons/lu";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {buttonVariants} from "@/components/ui/button";
import {GiHand} from "react-icons/gi";
import {cn} from "@/lib/utils";


const Links = () => {
    const pathname = usePathname();
    const list = [
        {
            title: '首页',
            href: '/',
            icon: <LuHome size="28"/>
        },
        {
            title: '挑战',
            href: '/challenge',
            icon: <GiHand size="28"/>
        }

    ]
    return (
        list.map((item, index) => (
            <Link key={index} href={item.href}
                  className={buttonVariants({
                      variant: item.href === pathname ? "secondary" : "ghost",
                      size: "lg",
                      className:`${item.href === pathname ? "text-lg font-extrabold  " : "text-lg font-normal"}`,

                  })}
            >
                <div className={"flex flex-row gap-3 justify-center items-center"}>
                    <span>{item.icon}</span>
                    <p className={"hidden lg:block"}>{item.title}</p>
                </div>
            </Link>
        ))

    )
};

export default Links;