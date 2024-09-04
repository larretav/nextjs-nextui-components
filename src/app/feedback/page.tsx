import PackageMobileCard from "@/components/feedback/PackageMobileCard";

export default function FeedBackPage() {
  return (
    <div>
      <h1>Feedback Components</h1>
      <PackageMobileCard
        title="Nike Air Force"
        subtitle="Tenis 28cm"
        weightMeasures="35 x 20 x 20 - 1kg"
        quantity={4} />
    </div>
  );
}