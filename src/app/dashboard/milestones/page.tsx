import { Ban, Calendar, CircleCheckBig, CircleDot, Clock1 } from "lucide-react";
import Image from "next/image";

export default function MilestonesPage() {
  return (
    <div className="bg-card p-8">
      <header>
        <div className="bg-card rounded py-4">
          <div className="flex items-center gap-1.5 mb-5 ml-4">
            <Clock1 className="w-6 h-6" />
            <h1 className="leading-8 text-2xl font-medium">Milestone</h1>
          </div>

          <div className="mb-8 flex items-center gap-2 text-xs rounded-md border border-dashed border-border py-2 px-3 w-fit">
            <Calendar className="w-4 h-4" />
            <span className="leading-5">Date:</span>
            <span className="text-secondary-foreground bg-muted py-0.5 px-1 rounded-sm leading-4">
              26th May - 29th May 2025
            </span>
          </div>
          <div className="grid gap-6 max-w-[1057px] md:grid-cols-[repeat(auto-fit,_minmax(330px,1fr))]">
            <div className="bg-white p-6 rounded-xl space-y-6">
              <div className="flex items-center gap-6">
                <CircleCheckBig className="w-10 h-10 text-[rgb(173,138,0)] bg-[rgb(255,247,217)] p-2.5 rounded-full" />
                <span className="font-medium leading-6">Completed</span>
              </div>
              <span className="font-medium text-4xl leading-10">0</span>
            </div>
            <div className="bg-white p-6 rounded-xl space-y-6">
              <div className="flex items-center gap-6">
                <CircleDot className="w-10 h-10 text-[rgb(173,138,0)] bg-[rgb(255,247,217)] p-2.5 rounded-full" />
                <span className="font-medium leading-6">Upcoming</span>
              </div>
              <span className="font-medium text-4xl leading-10">0</span>
            </div>
            <div className="bg-white p-6 rounded-xl space-y-6">
              <div className="flex items-center gap-6">
                <Ban className="w-10 h-10 text-[rgb(173,138,0)] bg-[rgb(255,247,217)] p-2.5 rounded-full" />
                <span className="font-medium leading-6">Overdue</span>
              </div>
              <span className="font-medium text-4xl leading-10">0</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="rounded-2xl">
          <figure>
            <div className="relative max-w-[930px] min-h-[300px]">
              <Image
                src="/assets/images/no-projects-illustration.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="max-w-[640px] mx-auto text-center">
              <h2 className="font-medium text-xl leading-7 mb-0.5">
                You haven't started any projects yet
              </h2>
              <p className="leading-6 text-muted-foreground">
                Get assigned projects and assignments by your supervisor to
                start your milestone achievements.
              </p>
            </figcaption>
          </figure>
        </section>
      </main>
    </div>
  );
}
