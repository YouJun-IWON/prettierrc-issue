import Sidebar from "@/components/bar/onboarding/leftbar";
import Rightbar from "@/components/bar/onboarding/rightbar";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <main>
      <div className="grid w-full grid-cols-5 p-10 pb-16">
        <section className="col-span-4">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome to AIM Supervisor 👋
            </h2>
            <p className="text-muted-foreground">
              AIM Supervisor is a full-stack AI observability platform that
              helps you monitor, evaluate and improve your AI models.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <Sidebar />
            </aside>
            <div className="flex-1 lg:max-w-2xl">Main Content</div>
          </div>
        </section>
        <section className="col-span-1">
          <Rightbar />
        </section>
      </div>
    </main>
  );
};

export default page;
