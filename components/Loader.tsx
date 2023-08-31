import Image from "next/image";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="animate-spin w-10 h-10 relative">
        <Image alt="Loader Logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">MAIt is thinking...</p>
    </div>
  );
};

export default Loader;
