export type ITechnology = {
  name: string;
  slug: string;
  image?: {
    url?: string;
    public_id?: string;
  };
  experience: {
    count: number;
    unit: {
      type: string;
      enum: ["year", "month", "week", "day"];
    };
  };
  projects: number;
  description: string;
};
