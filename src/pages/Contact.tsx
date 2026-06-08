import Contactus from "../components/Contactus";
import Footer from "../components/footer/Footer";

export default function Contact() {
    return (
        <div className="text-white overflow-x-hidden bg-black/70">
            <section className="flex flex-col items-center justify-center py-40 px-6 md:px-20">
                <Contactus />
                <Footer />
            </section>
        </div>
    );
}