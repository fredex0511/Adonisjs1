import { test } from '@japa/runner'

test.group('Prueba 1', () => {
  test('test1', async ({ client }) => {
    const response = await client.get('/test1')
  
    response.assertStatus(200)
    response.assertBodyContains({ campo1: 'si_jala' })
  })

  test('UsuarioExistente', async ({ client, assert }) => {
    const userId = 1;
    const response = await client.get(`/crud/${userId}`)
    const datosbody = JSON.parse(response.text())

    const usuarioExiste = datosbody.id !== undefined

    response.assertStatus(200)
    assert.isTrue(usuarioExiste)
  })

  test('UsuarioNoExistente', async ({ client, assert }) => {
    const userId = 99;
    const response = await client.get(`/crud/${userId}`)
    const datosbody = JSON.parse(response.text())

    const usuarioNoExiste = datosbody.id === undefined

    response.assertStatus(404)  
    assert.isTrue(usuarioNoExiste)
  })
})
