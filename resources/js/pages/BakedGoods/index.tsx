import { BakedGoodResource } from "@/types";

export default function Home({bakedGoods}: {bakedGoods: BakedGoodResource}) {
    return (
        <div>
            <h1>Baked Goods List</h1>
            <pre>{JSON.stringify(bakedGoods, null, 2)}</pre>
        </div>
    );
}