import Heading from "@/components/Heading";
import SuscriptionButton from "@/components/SuscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { GearIcon } from "@radix-ui/react-icons";

type Props = {};

const Settings = async (props: Props) => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title={"Settings"}
        description={"Change your settings"}
        icon={GearIcon}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? "You are a pro user" : "You are not a pro user"}
        </div>
        <SuscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default Settings;
