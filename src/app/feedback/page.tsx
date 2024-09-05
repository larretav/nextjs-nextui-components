import { PageTitle } from "@/components";
import PackageCard from "@/components/feedback/PackageCard";

export default function FeedBackPage() {
  return (
    <div className="flex flex-col gap-3 px-6 py-3">
      <PageTitle text="Feedback Components" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <PackageCard
          title="Nike Air Force"
          subtitle="Tenis 28cm"
          weightMeasures="35 x 30 x 20 - 1kg"
          quantity={4}
        />
        <PackageCard
          title="Nike Air Force"
          subtitle="Tenis 28cm"
          weightMeasures="35 x 30 x 20 - 1kg"
          quantity={4}
        />
        <PackageCard
          title="Nike Air Force"
          subtitle="Tenis 28cm"
          weightMeasures="35 x 30 x 20 - 1kg"
          quantity={4}
        />

      </div>

    </div>
  );
}