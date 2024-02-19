import styles from './styles.module.css'
import { BackButton } from '../BackButton/BackButton'
interface HeaderProps {
  showBackButton: boolean;
}
export const Header: React.FC<HeaderProps>  = ({showBackButton}) => {

  const headerStyles = {
    justifyContent: showBackButton ? 'space-between' : 'flex-end',
  };
  return (
    <div className={`${styles.topPanel}`} style={headerStyles}>
      {
        showBackButton && <BackButton href='../login' /> 
      }
      Chronokill
    </div>
  )
}