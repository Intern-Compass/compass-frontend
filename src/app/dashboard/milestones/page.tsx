import { Ban, Calendar, CircleCheckBig, CircleDot, Clock1 } from "lucide-react";
import Image from "next/image";

export default function MilestonesPage() {
  return (
    <div className="bg-card p-8">
      <header>
        <div className="flex items-center gap-1.5">
          <Clock1 className="w-6 h-6" />
          <h1 className="leading-8 text-2xl font-medium">Milestone</h1>

          <div>
            <Calendar />
            <span>Date</span>
            <span className="text-secondary-foreground bg-muted py-0.5 px-1 rounded-sm">26th May - 29th May 2025</span>
          </div>
        </div>
      </header>
      <main>
        <section className="rounded-2xl">
          <div className="flex gap-6 max-w-[1057px]">
            <div className="grow bg-white p-6 rounded-xl space-y-6">
              <div className="flex items-center gap-5">
                <CircleCheckBig />
                <span className="font-medium leading-6">Completed</span>
              </div>
              <span className="font-medium text-4xl leading-10">0</span>
            </div>
            <div className="grow bg-white p-6 rounded-xl space-y-6">
              <div className="flex items-center gap-5">
                <CircleDot />
                <span className="font-medium leading-6">Upcoming</span>
              </div>
              <span className="font-medium text-4xl leading-10">0</span>
            </div>
            <div className="grow bg-white p-6 rounded-xl space-y-6">
              <div className="flex items-center gap-5">
                <Ban />
                <span className="font-medium leading-6">Overdue</span>
              </div>
              <span className="font-medium text-4xl leading-10">0</span>
            </div>
          </div>
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
