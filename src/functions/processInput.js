'use server'

import { revalidatePath } from 'next/cache'

// Simulasi database sederhana menggunakan array
// Dalam aplikasi nyata, gunakan database seperti PostgreSQL, MySQL, dll
let contactsDatabase = []

export async function submitContact(formData) {
  try {
    // Ambil data dari form
    const contactData = {
      id: Date.now().toString(),
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      createdAt: new Date().toISOString(),
      status: 'unread'
    }

    // Validasi data
    if (!contactData.name || !contactData.email || !contactData.message) {
      return {
        success: false,
        message: 'Semua field wajib diisi!'
      }
    }

    // Simulasi delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simpan ke database
    contactsDatabase.push(contactData)

    // Revalidate dashboard page
    revalidatePath('/dashboard')

    return {
      success: true,
      message: 'Pesan berhasil dikirim!'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Terjadi kesalahan saat mengirim pesan'
    }
  }
}

export async function getContacts() {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return contactsDatabase.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export async function updateContactStatus(contactId, status) {
  try {
    const contactIndex = contactsDatabase.findIndex(contact => contact.id === contactId)
    
    if (contactIndex !== -1) {
      contactsDatabase[contactIndex].status = status
      revalidatePath('/dashboard')
      return { success: true }
    }
    
    return { success: false, message: 'Contact tidak ditemukan' }
  } catch (error) {
    return { success: false, message: 'Terjadi kesalahan' }
  }
}

export async function deleteContact(contactId) {
  try {
    contactsDatabase = contactsDatabase.filter(contact => contact.id !== contactId)
    revalidatePath('/dashboard')
    return { success: true }
  } catch (error) {
    return { success: false, message: 'Terjadi kesalahan' }
  }
}
