import ReachedItem from "../../molecules/ReachedItem"


export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachedItem index={0} title="290M+" desc="Players Top Up" />
                    <ReachedItem index={1} title="12.500" desc="Games Available" />
                    <ReachedItem index={2} title="99,9%" desc="Happy Players" />
                    <ReachedItem index={3} title="4.7" desc="Rating Worldwide" />
                </div>
            </div>
        </section>
    )
}
