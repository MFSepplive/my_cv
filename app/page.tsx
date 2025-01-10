import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.gridLayout}>
            <div className={styles.mainContent}>
                <h1 className={styles.headLine}>Welcome to my CV</h1>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <Image
                            src="/portrait.jpg"
                            width={200}
                            height={200}
                            alt="Picture of Me, generated in AI"
                        />
                    </div>
                </div>
                <h3
                    className={styles.subHeadLine}
                >{`I am Markus <MFSepplive> Frenslich`}</h3>
                <h3
                    className={styles.subHeadLine}
                >{`I am a Webdeveloper located in Salzburg, Austria 🇦🇹`}</h3>
                <div className={styles.contactContainer}>
                    <div>Github</div>
                    <div>LinkedIn</div>
                    <div>X</div>
                    <div>Instagram</div>
                </div>
            </div>
        </div>
    )
}
