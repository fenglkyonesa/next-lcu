
import React from 'react';

import {GiVanillaFlower} from "react-icons/gi";

import Link from "next/link";

const Logo = () => {
    return (

        <Link href="/">
            <div className={"flex flex-row justify-center items-center w-full h-20 gap-2"}>
                <GiVanillaFlower size="28" />
                <p className={"font-bold text-xl hidden lg:block"}>群峰之巅</p>
            </div>
        </Link>

    );
};

export default Logo;