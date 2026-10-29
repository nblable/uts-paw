
export default function PesanStatus({ pesan, tipe = 'info' }) {
  return (
    <p className={`pesan-status pesan-${tipe}`} role={tipe === 'error' ? 'alert' : 'status'}>
      {pesan}
    </p>
  )
}
