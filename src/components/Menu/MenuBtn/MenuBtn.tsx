import { MenuBtnProps } from "../../../models/Props";

const MenuBtn = ({ txt, icon, onClick }: MenuBtnProps) => {
  return (
    <button className="Menu__btn" onClick={onClick}>
      <i className={"Menu__btn-icon " + icon}></i>
      <span className="Menu__btn-txt">{txt}</span>
    </button>
  )
}

export default MenuBtn;