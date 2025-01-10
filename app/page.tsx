import styles from './page.module.css'
import Image from 'next/image'
import clsx from 'clsx'

export default function Home() {
    return (
        <div className={styles.gridLayout}>
            <div className={styles.mainContent}>
                <h1 className={styles.headline}>Welcome to my CV</h1>
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
                    className={styles.subHeadline}
                >{`I am Markus <MFSepplive> Frenslich`}</h3>
                <h3
                    className={styles.subHeadline}
                >{`I am a Webdeveloper located in Salzburg, Austria 🇦🇹`}</h3>
                <div className={styles.contactWrapper}>
                    <h1 className={styles.contactHeadline}>Contact</h1>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactItemsWrapper}>
                            <div
                                className={clsx(
                                    styles.contactItem,
                                    styles.seperator
                                )}
                            >
                                <a
                                    className={styles.contactLink}
                                    href="https://github.com/MFSepplive"
                                >
                                    Github
                                </a>
                            </div>
                            <div
                                className={clsx(
                                    styles.contactItem,
                                    styles.seperator
                                )}
                            >
                                <a
                                    className={styles.contactLink}
                                    href="https://www.linkedin.com/in/markus-frenslich-b0669112b/"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div
                                className={clsx(
                                    styles.contactItem,
                                    styles.seperator
                                )}
                            >
                                <a
                                    className={styles.contactLink}
                                    href="https://x.com/MFSepplive"
                                >
                                    X
                                </a>
                            </div>
                            <div className={styles.contactItem}>
                                <a
                                    className={styles.contactLink}
                                    href="https://www.instagram.com/mfsepplive/"
                                >
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
