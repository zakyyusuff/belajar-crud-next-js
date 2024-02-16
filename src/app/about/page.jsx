// export default function AboutPage() {
//   return (
//     <div className="text-center p-10">
//       <h1 className="font-bold text-2xl my-4" style={{ textShadow: '0 0 2px white', fontWeight: 'bold' }}>Zaky Muhammad Yusuf</h1>

//       <p className="text-gray-300">
//       Saya adalah seorang mahasiswa Teknik Informatika yang penuh semangat dan gemar belajar tentang perkembangan teknologi informasi
//       (IT). Saya telah menyelesaikan pendidikan D4 Teknik Informatika di Politeknik Pos Indonesia, yang kini dikenal sebagai Universitas
//       Logistik dan Bisnis Indonesia (ULBI). Saya memiliki ketertarikan yang kuat dalam menggali pengetahuan baru seputar IT dan
//       berkomitmen untuk terus meningkatkan pemahaman Saya dalam bidang ini. Dengan latar belakang pendidikan dan semangat belajar
//       saya, saya memiliki potensi besar untuk mencapai keberhasilan di dunia teknologi informasi.
//       </p>
//       <br/>
//       <p className="text-gray-300">
//       Di era industri saat ini, Next.js telah menjadi pilihan utama bagi banyak perusahaan sebagai framework untuk pengembangan backend mereka. Saya tengah fokus belajar mengenai konsep CRUD (Create, Read, Update, Delete) yang merupakan dasar dalam pengembangan perangkat lunak. Dalam proyek ini, saya merancang, membuat, dan membangun program menggunakan Next.js sebagai framework frontend dan backend, serta database SQL dari MySQL sebagai penyimpanan data.
//       Penggunaan Next.js memberikan banyak keuntungan, seperti kemudahan dalam mengatur rute aplikasi, manajemen state yang efisien, serta kemampuan untuk membuat aplikasi yang responsif dan cepat. Selain itu, integrasi dengan MySQL memungkinkan saya untuk menyimpan dan mengelola data dengan efisien.
//       Dengan fokus pada pembelajaran ini, saya berharap dapat mengembangkan keterampilan dalam pengembangan perangkat lunak yang berbasis web, serta memperluas pemahaman saya tentang konsep-konsep penting dalam industri teknologi informasi saat ini.
//       </p>
      
//     </div>

    
//   );
// }


///////////////////////////////////
import styles from './AboutPage.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className={`${styles.container} text-center p-10`}>
      <a href="https://www.instagram.com/zaky_m_yusuf/" target="_blank" rel="noopener noreferrer">
        <div className={styles['image-container']}>
          <Image src="/zaky.jpg" alt="Zaky Muhammad Yusuf" width={200} height={200} />
        </div>
      </a>
      <h1 className="font-bold text-2xl my-4">Zaky Muhammad Yusuf</h1>

      <p className="text-gray-300">
        Saya adalah seorang mahasiswa Teknik Informatika yang penuh semangat dan gemar belajar tentang perkembangan teknologi informasi
        (IT). Saya telah menyelesaikan pendidikan D4 Teknik Informatika di Politeknik Pos Indonesia, yang kini dikenal sebagai Universitas
        Logistik dan Bisnis Indonesia (ULBI). Saya memiliki ketertarikan yang kuat dalam menggali pengetahuan baru seputar IT dan
        berkomitmen untuk terus meningkatkan pemahaman Saya dalam bidang ini. Dengan latar belakang pendidikan dan semangat belajar
        saya, saya memiliki potensi besar untuk mencapai keberhasilan di dunia teknologi informasi.
      </p>
      <br/>
      <p className="text-gray-300">
        Di era industri saat ini, Next.js telah menjadi pilihan utama bagi banyak perusahaan sebagai framework untuk pengembangan backend mereka. Saya tengah fokus belajar mengenai konsep CRUD (Create, Read, Update, Delete) yang merupakan dasar dalam pengembangan perangkat lunak. Dalam proyek ini, saya merancang, membuat, dan membangun program menggunakan Next.js sebagai framework frontend dan backend, serta database SQL dari MySQL sebagai penyimpanan data.
        Penggunaan Next.js memberikan banyak keuntungan, seperti kemudahan dalam mengatur rute aplikasi, manajemen state yang efisien, serta kemampuan untuk membuat aplikasi yang responsif dan cepat. Selain itu, integrasi dengan MySQL memungkinkan saya untuk menyimpan dan mengelola data dengan efisien.
        Dengan fokus pada pembelajaran ini, saya berharap dapat mengembangkan keterampilan dalam pengembangan perangkat lunak yang berbasis web, serta memperluas pemahaman saya tentang konsep-konsep penting dalam industri teknologi informasi saat ini.
      </p>
    </div>
  );
}

