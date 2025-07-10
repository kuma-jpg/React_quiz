import Styles from './Loading.module.css'
export default function Loading({ active }) {
    return (
        <div className={`${Styles.loading} ${active ? Styles.isActive : ""}`}>
            <span className={Styles.Font}>～結果発表～</span>
        </div>
    )
}
