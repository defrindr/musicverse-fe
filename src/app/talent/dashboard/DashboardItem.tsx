import Card from "@/components/admin/Card";
import { useMemo } from "react";

type DashboardCardProps = {
  label: string;
  count: number;
  icon: string;
  bg: string;
  color?: string;
  dark?: boolean;
};

export default function DashboardCard({
  label,
  count,
  icon,
  bg,
  color,
  dark = false,
}: DashboardCardProps) {
  const textColor = useMemo(
    () => (color ? color : !dark ? "text-white" : "text-black"),
    [color, dark],
  );
  return (
    <div className={`p-4 rounded ${bg} relative`}>
      <span
        className={`absolute right-4 bottom-2 material-icons ${textColor} opacity-40`}
        style={{ fontSize: "6rem" }}
      >
        {icon}
      </span>
      <div className="p-2">
        <span className={`pb-10 block text-md ${textColor}`}>{label}</span>
        <span className={`block text-3xl font-bold ${textColor}`}>{count}</span>
      </div>
    </div>
  );
}
