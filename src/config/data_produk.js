// 1. Import Semua Aset Gambar Produk (Termasuk perbaikan yang sebelumnya kurang)
import pelPelan from '../assets/produk/pelpelan.jpg';
import sapuRayung from '../assets/produk/sapu-rayung.jpg';
import pelHanduk from '../assets/produk/pelhanduk.jpg';
import cottonMop from '../assets/produk/cotton-mop.jpg';
import sikatLobster from '../assets/produk/sikat-lobster.jpg';
import sapuTaman from '../assets/produk/Sapu Taman.jpg';
import pengkiSisir from '../assets/produk/Pengki Sisir.jpg';
import jasHujan from '../assets/produk/Jas Hujan.jpg';
import kemoceng from '../assets/produk/kemoceng.jpg';
import cakarDaun from '../assets/produk/cakar-daun.jpg'; // Tambahan import
import sikatToilet from '../assets/produk/sikat-toilet.jpg'; // Tambahan import

// 2. Data Array Produk Terstruktur
const produk = [
  {
    best_seller: true,
    image: pelPelan,
    alt: 'wiper-lantai',
    title: "Wiper Lantai",
    desc: "Karet tebal berkualitas tinggi yang efektif mendorong air sekali usap, anti-slip, dan gagang stainless ringan.",
  },
  {
    best_seller: true,
    image: sapuRayung,
    alt: 'sapu-rayung',
    title: "Sapu Rayung",
    desc: "Serat rayung alami pilihan yang diikat kuat, tidak mudah rontok, efektif membersihkan debu halus di lantai.",
  },
  {
    best_seller: false,
    image: pelHanduk,
    alt: 'pel-handuk',
    title: "Pel Handuk",
    desc: "Kain handuk mikrofiber dengan daya serap air sangat tinggi, mudah diperas, dan lembut untuk semua jenis lantai.",
  },
  {
    best_seller: false,
    image: cottonMop,
    alt: 'cotton-mop',
    title: "Cotton Mop",
    desc: "Benang katun premium rajutan padat yang ampuh mengikat kotoran, tahan lama, dan cocok untuk area lantai luas.",
  },
  {
    best_seller: true,
    image: jasHujan,
    alt: 'jas-hujan',
    title: "Jas Hujan",
    desc: "Bahan waterproof tebal anti-rembes dengan pelindung kepala ekstra, nyaman digunakan saat hujan deras.",
  },
  {
    best_seller: true,
    image: sikatLobster,
    alt: 'sikat-lobster',
    title: "Sikat Lobster",
    desc: "Bulu sikat nilon yang kaku dan rapat untuk menyikat noda membandel, dilengkapi bodi plastik tebal anti-pecah.",
  },
  {
    best_seller: false,
    image: pengkiSisir,
    alt: 'pengki-sisir',
    title: "Pengki Sisir",
    desc: "Dilengkapi gerigi pembersih untuk merontokkan rambut atau kotoran yang menyangkut di bulu sapu.",
  },
  {
    best_seller: false,
    image: sapuTaman,
    alt: 'sapu-taman',
    title: "Sapu Taman",
    desc: "Lidi tebal dan kuat yang dirancang khusus untuk membersihkan daun kering dan sampah kasar di area outdoor.",
  },
  {
    best_seller: false,
    image: kemoceng,
    alt: 'kemoceng',
    title: "Kemoceng",
    desc: "Bulu premium yang halus dan rapat, efektif mengikat debu tanpa beterbangan serta gagang yang nyaman digenggam.",
  },
  {
    best_seller: false,
    image: cakarDaun, // Menggunakan variabel camelCase hasil import
    alt: 'cakar-daun',
    title: "Cakar Daun",
    desc: "Cakar Taman multifungsi berbahan plastik kokoh untuk mengumpulkan sampah daun atau menggemburkan tanah dengan mudah.",
  },
  {
    best_seller: false,
    image: sikatToilet, // Menggunakan variabel camelCase hasil import
    alt: 'sikat-toilet',
    title: "Sikat Toilet",
    desc: "Bulu sikat nilon bundar yang elastis dan kuat, efektif menjangkau sela-sela kloset untuk kebersihan maksimal.",
  }
];

export default produk;
