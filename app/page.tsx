import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 w-96">
        <Label htmlFor="url">URL</Label>
        <div className="flex gap-2">
          <Input
            type="text"
            id="url"
            placeholder="Enter URL"
            className="flex-1"
          />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
}
