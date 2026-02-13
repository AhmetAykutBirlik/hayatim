"use client";
import { motion } from "framer-motion";

export default function Letter() {
    return (
        <section className="py-24 px-6 bg-[#fff9f9]">
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-16 rounded-[2rem] shadow-xl relative overflow-hidden">
                {/* Paper texture/look */}
                <div className="absolute top-0 left-0 w-full h-4 bg-[#ffccd5]/50" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-10 text-[#c9184a] font-serif border-b pb-4">
                        Canikom’a Mektup
                    </h2>

                    <div className="space-y-6 text-lg leading-loose text-[#4a1d1d] font-serif">
                        <p>Canikom,</p>

                        <p>
                            Seni okulda ilk gördüğüm o anı hatırlıyor musun? O gün kalbimin bu kadar hızlı atacağını,
                            hayatımın geri kalanının seninle şekilleneceğini hiç tahmin etmemiştim. Ama o gün,
                            o koridorda seni gördüğümde içimde bir yerlerde bir şeyler değişti.
                        </p>

                        <p>
                            Sonra o ilk yemeğe çıkışımız... Masada otururken seninle konuştuğum her an, gözlerine her baktığımda
                            içimdeki o his iyice kesinleşti. Kendi kendime <span className="text-[#c9184a] font-bold">"Tamam, bu o. Benim hayatımın aşkı bu."</span> dedim.
                            O an seninle her şeye vardım.
                        </p>

                        <p>
                            Tabii başlangıçta biraz zordu. Sen biraz kaçtın, ben bir adım attıkça sen bazen iki adım koştun.
                            Ama bu tatlı kovalamaca bizi birbirimize daha çok bağladı. Sabrım, sana olan sevgimin en büyük kanıtıydı belki de.
                            Sonunda kalplerimiz aynı ritimde, aynı yerde buluştu.
                        </p>

                        <p>
                            Bugün yanımda olduğun için, hayatıma bu kadar güzellik kattığın için sana minnettarım.
                            Sen benim en güzel hikayemsin.
                        </p>

                        <p className="pt-8 text-xl font-bold text-[#c9184a]">
                            Sevgililer günün kutlu olsun Canikom. Seni çok seviyorum.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
