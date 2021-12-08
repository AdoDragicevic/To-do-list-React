import { MenuBtnProps } from "../../../models/Props";

const MenuBtn = ({ txt, icon, onClick }: MenuBtnProps) => {
  return (
    <button className="btn btn--menu bord-rad" onClick={onClick}>
      <i className={icon} />
      <span className="d-none-sm">{txt}</span>
    </button>
  )
}

export default MenuBtn;