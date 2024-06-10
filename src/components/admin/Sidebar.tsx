"use client";
import { useState } from "react";
import Confirm from "../general/popups/Confirm";
import SidebarApp, { SidebarButton, SidebarMenu, SidebarTitle } from "../general/Sidebar";
import { onLogout } from "@/lib/utis/api";

export default function AdminSidebar() {
  const [confirmLogout, setConfirmLogout] = useState(false);
  return (
    <>
      <SidebarApp>
        <SidebarTitle label="Selamat Datang Admin," />
        <SidebarMenu label="Pengguna" href="/admin/users" icon="person" />
        <hr />
        <SidebarButton onClick={() => setConfirmLogout(!confirmLogout)} label="Logout" />
      </SidebarApp>
      <Confirm text={"Apakah anda yakin ingin keluar ?"} onApprove={onLogout} active={confirmLogout} onCancel={setConfirmLogout} />
    </>
  )
}