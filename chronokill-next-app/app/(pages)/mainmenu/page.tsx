"use client"
import styles from "./styles.module.css";
import { Button, Header } from "../../components";

export const MainMenu = () => {
	
	return (
		<div>
			<div className={styles.bg}></div>
			<Header showBackButton={false} />
			<div className={styles.rectangle}>
				<div className={styles.header}>
					<img
						src="/logo.png"
						alt="Logo"
						className={styles.logo}
					/>
					<h1 className={styles.h1}>MAIN MENU</h1>
				</div>
				<form>
					<Button href="../ingame"> Start/Continue</Button>
					<Button href="../options">Options</Button>
					<Button href="../quit">Quit</Button>
				</form>
			</div>
		</div> 
	)
}
  
export default MainMenu