"use client";
import { ModeToggle } from "./ModeToggle";
import AvatarComponent from "./AvatarComponent";
import { Button } from "./shared/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./shared/dropdown-menu";

import { User, Settings, LogOut, LoaderCircle } from "lucide-react";
import { SidebarTrigger } from "./shared/sidebar";
import useProfileData from "../(pages)/profile/_hooks/useProfileData";

import Link from "next/link";
import useSignOut from "../(auth)/_hooks/useSignOut";

export function Navbar() {
  const { userProfile, isPending } = useProfileData();
  const { signOut, isPending: signOutPending } = useSignOut();
  return (
    <div className="mx-auto px-4 h-16 flex items-center justify-between max-w-7xl ">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-foreground">SocialApp</h1>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
        <SidebarTrigger />
        {isPending ? (
          <LoaderCircle className="animate-spin size-6" />
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <AvatarComponent src={userProfile.user.photo || "/placeholder.svg"} alt="User" fallBack={userProfile.user.name.charAt(0)} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <Link href="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={signOut} disabled={signOutPending}>
                <LogOut className="mr-2 h-4 w-4" />

                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
