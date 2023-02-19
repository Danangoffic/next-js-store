import CategoryItem from "./CategoryItem";

export default function TopUpCategories() {
    return (
        <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
            <div className="main-content">
                <div className="row">
                    <CategoryItem icon="desktop" spent={4800000} >Game<br />Desktop</CategoryItem>
                    <CategoryItem icon="mobile" spent={8455000} >Game<br />Mobile</CategoryItem>
                    <CategoryItem icon="desktop" spent={5000000} >Other<br />Categories</CategoryItem>
                </div>
            </div>
        </div>
    )
}
