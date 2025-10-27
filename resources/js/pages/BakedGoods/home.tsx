import { BakedGood } from "@/types";

export default function Home({bakedGoods}: {bakedGoods: BakedGood[]}) {
    return (
        <div>
            <h1>Baked Goods</h1>
            <pre>{JSON.stringify(bakedGoods, null, 2)}</pre>
        </div>
    );
}