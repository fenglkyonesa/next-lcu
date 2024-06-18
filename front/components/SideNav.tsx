import React from 'react';
import Logo from "@/components/Logo";
import Links from "@/components/Links";

const SideNav = () => {
    return (
        <div className="w-20 lg:w-64 flex  min-h-screen flex-col border-r px-2 py-4 ">
           <Logo/>
            <Links/>
        </div>
    );
};

export default SideNav;