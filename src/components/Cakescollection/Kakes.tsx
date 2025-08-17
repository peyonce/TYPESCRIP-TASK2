import styles from './cakes.module.css';

export function Kakes() {
    const cakes = [
        {
            name: "Custom Cakes",
            desc: "Designed just for your special moments.",
            img: "/images/ customcake.jpeg",
            btn: "Custom Cakes",
            btnColor: "#ff6f61"
        },
        {
            name: "Macarons",
            desc: "Crisp shell, chewy interior, vibrant flavors.",
            img: "/images/macaron.jpeg",
            btn: "Macarons",
            btnColor: "#ff6f61"
        },
        {
            name: "Cupcake Collections",
            desc: "Assorted flavors, perfect for any occasion.",
            img: "/images/cupcake.jpeg",
            btn: "Cupcake Collections",
            btnColor: "#e91e63"
        }
    ];

    return (
        <div className={styles.cakes}>
            <div className={styles.halfBackground}></div>
            <div className={styles.container}>
                <h1 className={styles.cakesTitle}>Our Delicious Cakes</h1>
                <div className={styles.cakesList}>
                    {cakes.map((cake, idx) => (
                        <div className={styles.cakesCard} key={idx}>
                            <img src={cake.img} alt={cake.name} className={styles.cakeImage} />
                            <h2 className={styles.cakeName}>{cake.name}</h2>
                            <p className={styles.cakeDescription}>{cake.desc}</p>
                            <button
                                className={styles.cakeButton}
                                style={{ backgroundColor: cake.btnColor }}
                            >
                                {cake.btn}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
