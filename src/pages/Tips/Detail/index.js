import React from 'react';
import { useParams } from 'react-router-dom';
import tipsData from '../../../utils/tips.json';

function Artikel() {
    const params = useParams();
    const tipsSelected = tipsData.find((tips) => {
        return tips.slug === params.slug;
    });
    return (
        <div>
            <section className="padding-y-xxl position-relative z-index-1 pt-3 pb-5">
                <div className="container max-width-adaptive-sm position-relative z-index-2">
                    <div className="text-component margin-bottom-sm pt-5">
                        <h1>{tipsSelected.judul}</h1>
                        <p>Booklogia / {tipsSelected.tanggal}</p>
                    </div>
                </div>

                <div className="container pt-3">
                    <img
                        src={
                            window.location.origin + '/assets/images/tips/' + tipsSelected.thumbnail
                        }
                        className="img-fluid w-100 rounded"
                        alt={tipsSelected.thumbnail}
                    />
                </div>

                <div className="container pt-4">
                    <p>Hallo guys.</p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, harum
                        quasi deserunt earum sapiente laboriosam provident similique nulla doloribus
                        ratione fuga corporis repellendus nobis aliquid? Praesentium numquam quasi,
                        doloribus veritatis vel harum magnam quaerat, impedit aut a odit? Corporis
                        magni assumenda eveniet, earum libero aspernatur, illum provident quam,
                        asperiores minima enim facere totam debitis. Incidunt similique nobis eaque
                        alias obcaecati dignissimos provident consectetur ad exercitationem, eveniet
                        vel nemo perferendis architecto, beatae suscipit accusamus, voluptates qui!
                        Impedit, nobis aperiam? Sit, molestiae doloribus. Fugit aliquam, magnam ipsa
                        sapiente repellat modi accusamus quia beatae doloremque magni ipsum aut
                        dolorem suscipit possimus explicabo temporibus?
                    </p>

                    <p>
                        Rem architecto totam iusto ratione! Corrupti cupiditate similique,
                        perspiciatis et error quasi molestias id, ab facere eligendi qui dignissimos
                        dolores nisi voluptate voluptatum eaque excepturi odit incidunt reiciendis
                        rerum laborum nobis. Alias, repudiandae. Tempora voluptatibus asperiores
                        molestias, nulla corrupti ipsa molestiae laboriosam!
                    </p>

                    <p>
                        Nisi doloremque dicta sequi inventore ut cupiditate dolores consequatur
                        dolor provident hic nihil assumenda aspernatur vero voluptatum tempore,
                        numquam consectetur obcaecati ipsam commodi cum vitae quos sed. Ipsum
                        accusamus vitae nobis molestiae deserunt blanditiis explicabo iste debitis
                        culpa eveniet, cumque sit perferendis hic quisquam sequi? Quidem, enim.
                        Laborum repellendus perferendis officia at minus, inventore tenetur maiores
                        deleniti excepturi, debitis ea officiis tempora explicabo quibusdam, vitae
                        optio! Harum ipsum quas corporis, autem voluptatem et voluptatum animi
                        aperiam similique necessitatibus inventore iusto omnis magni asperiores
                        culpa architecto aspernatur, nostrum recusandae nobis veritatis velit. Autem
                        recusandae, a in animi repellendus, debitis, ex quasi illo voluptatum hic
                        eligendi velit iste veniam numquam necessitatibus veritatis alias quam
                        exercitationem. Nesciunt reprehenderit dicta earum, dolore ea dolores
                        placeat.
                    </p>

                    {/* <p className="text-break">
            Seringkali infrastruktur yang luas yang mendasari peradaban industri
            mengalami transformasi yang dramatis. Tetapi perubahan seperti itu
            tampaknya terjadi sekarang. Dalam gelombang besar perubahan
            teknologi, sensor menyebar melalui pabrik dan gudang, perangkat
            lunak memprediksi perlunya perawatan sebelum mesin rusak, jaringan
            listrik dan dok pemuatan menjadi cerdas, dan komponen yang dirancang
            khusus sedang diproduksi sesuai permintaan. Para pemimpin revolusi
            industri berikutnya adalah perusahaan yang membuat kemajuan di
            bidang-bidang seperti robotika, pembelajaran mesin, fabrikasi
            digital.
          </p>
          <p className="text-break">
            Karena semua teknologi ini memperkuat dampak orang lain, mereka
            mengarah ke tingkat kemahiran baru, dan jenis peluang dan tantangan
            baru untuk bisnis dan untuk masyarakat luas. Salah satu indikator
            kunci adalah bahwa batas-batas konvensional di antara
            industri-industri sedang mengikis. Semakin sulit untuk membedakan
            antara, katakanlah, perusahaan telekomunikasi dan produsen hiburan,
            atau antara bank ritel dan toko ritel. Hubungan di antara pemasok,
            produsen, dan konsumen juga kabur, lebih cepat daripada banyak
            pengambil keputusan bisnis yang dipersiapkan.
          </p>

          <p className="text-break">
            Widi juga menjelaskan bahwa penerapan teknologi informasi secara
            digital pada perusahaan bukan hanya sekadar keinginan yang kuat ,
            namun juga memerlukan blueprint, dokumentasi yang jelas tentang visi
            dan misi strategis perusahaan serta pendekatan secara bertahap.
          </p>
          <p className="text-break">
            "Selain memperkuat fondasi transformasi digital perusahaan, tidak
            hanya dengan mendapatkan wawasan tentang teknologi digital terbaru,
            tetapi juga menemukan cara bagaimana tetap relevan dan memimpin
            persaingan di era revolusi industri 4.0 ini," ujar Widi menandaskan.
          </p> */}
                </div>
            </section>
        </div>
    );
}

export default Artikel;
