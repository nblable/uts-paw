
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

function renderPadaRute(rute) {
  return render(
    <MemoryRouter initialEntries={[rute]}>
      <App />
    </MemoryRouter>,
  )
}


test('rute tidak dikenal menampilkan 404', () => {
  renderPadaRute('/tidak-ada')

  expect(
    screen.getByRole('heading', { name: '404' }),
  ).toBeInTheDocument()
})


test('halaman utama menampilkan judul utama', () => {
  renderPadaRute('/')

  expect(
    screen.getByRole('heading', { level: 1 }),
  ).toBeInTheDocument()
})


test('halaman tentang menampilkan nama dan NIM', () => {
  renderPadaRute('/tentang')

  expect(screen.getByText(/Nabila Ramadhani Mujahidin/i))
    .toBeInTheDocument()

  expect(screen.getByText(/123140062/))
    .toBeInTheDocument()
})


test('halaman statistik menampilkan tabel kategori', () => {
  renderPadaRute('/statistik')

  expect(screen.getByRole('table')).toBeInTheDocument()
})

// Test 5: Halaman tambah menampilkan form
test('halaman tambah menampilkan input judul', () => {
  renderPadaRute('/tambah')

  expect(
    screen.getByRole('textbox', { name: /judul/i }),
  ).toBeInTheDocument()
})
