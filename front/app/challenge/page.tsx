import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {IoSettingsOutline} from "react-icons/io5";
import {
    CreditCard,
    Settings, User,
} from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Badge} from "@/components/ui/badge";
import CircleRectangle from "@/components/CircleRectangle";

const Page = () => {
    return <>

        <div className={" h-screen flex flex-row gap-2 py-4"}>
            <div className={"w-64 h-full  flex flex-col gap-2 mx-3  "}>
                <Card className={"h-1/2"}>
                    <div className={"flex  justify-end"}>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost"><IoSettingsOutline size={25}/></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4"/>
                                        <span>打开游戏</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard className="mr-2 h-4 w-4"/>
                                        <span>更换头像</span>
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4"/>
                                        <span>更换签名</span>
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4"/>
                                        <span>关闭游戏</span>
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator/>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <CardHeader className={"flex items-center justify-center"}>
                        <Avatar className={"w-20 h-20"}>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                            <AvatarFallback >name</AvatarFallback>
                        </Avatar>
                        <CardDescription className={"font-extrabold text-black text-lg"}>昵称</CardDescription>
                        <CardDescription>这是签名</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className={"flex items-center justify-between flex-row"}>
                            <div className={"flex flex-col items-center justify-center"}>
                                <Badge co>单双排</Badge>
                                <Button variant={"link"}>铂金1</Button>
                            </div>
                            <div className={"flex flex-col items-center justify-center"}>
                                <Badge>灵活组</Badge>
                                <Button variant={"link"}>铂金4</Button>
                            </div>
                            <div className={"flex flex-col items-center justify-center"}>
                                <Badge>kda</Badge>
                                <Button variant={"link"}>11</Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className={"flex flex-col items-center justify-center gap-4"}>
                        <p className={"font-bold"}>最近战绩</p>
                        <div  className={"flex flex-row gap-1 items-center justify-center"}>
                            <CircleRectangle width={10} height={70} color="purple" />
                            <CircleRectangle width={10} height={70} color="purple" />
                            <CircleRectangle width={10} height={70} color="purple" />
                            <CircleRectangle width={10} height={70} color="purple" />
                            <CircleRectangle width={10} height={70} color="purple" />
                            <CircleRectangle width={10} height={60} color="red" />
                            <CircleRectangle width={10} height={50} color="red" />
                            <CircleRectangle width={10} height={50} color="red" />
                            <CircleRectangle width={10} height={50} color="red" />
                            <CircleRectangle width={10} height={50} color="red" />
                        </div>

                    </CardFooter>
                </Card>
<Card className={"h-1/2"}>
    <CardHeader>
        header
        <CardDescription>这是签名</CardDescription>

    </CardHeader>
    <CardContent>
        cont
    </CardContent>
    <CardFooter>
        footer
    </CardFooter>
</Card>

            </div>
            <div>kk</div>
        </div>

    </>
};
export default Page;