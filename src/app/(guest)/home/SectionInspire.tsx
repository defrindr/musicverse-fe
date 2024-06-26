import Title from "@/components/guest/Title";
import { useContext, useMemo } from "react";
import { GuestContext } from "./page";

export default function SectionInspire() {
  const { items } = useContext(GuestContext);

  const secondTitle = useMemo(() => {
    if (items["app.text.gallery-title"]) {
      let splitted = items["app.text.gallery-title"].split("\n");
      return splitted[splitted.length - 1] !== items["app.text.gallery-title"]
        ? splitted[splitted.length - 1]
        : "";
    }
    return "";
  }, [items["app.text.gallery-title"]]);

  const firstTitle = useMemo(() => {
    if (items["app.text.gallery-title"])
      return items["app.text.gallery-title"].replace(secondTitle, "");
    return "";
  }, [items["app.text.gallery-title"], secondTitle]);

  return (
    <section id="section-inspire">
      <div className="container mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-4 items-center justify-center">
          <div className="col-span-12 lg:col-span-12">
            <Title
              main={firstTitle}
              second={secondTitle}
              className="mb-5 lg:mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="overflow-hidden w-[100%] h-[270px] rounded-md">
                <img
                  src="/images/guest/inspire/1.png"
                  alt="Inspire 1"
                  className="min-h-[270px] min-w-[100%]"
                />
              </div>
              <div className="overflow-hidden w-[100%] h-[270px] rounded-md">
                <img
                  src="/images/guest/inspire/2.png"
                  alt="Inspire 2"
                  className="min-h-[270px] min-w-[100%]"
                />
              </div>
              <div className="overflow-hidden w-[100%] h-[270px] rounded-md">
                <img
                  src="/images/guest/inspire/3.png"
                  alt="Inspire 3"
                  className="min-h-[270px] min-w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
