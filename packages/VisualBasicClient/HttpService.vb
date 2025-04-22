Imports System.Net.Http
Imports System.Threading.Tasks

Public Class HttpService
    Private Shared ReadOnly client As New HttpClient()

    Public Shared Async Function GetInvoicesAsync() As Task(Of String)
        Dim response As HttpResponseMessage = Await client.GetAsync("http://127.0.0.1:5000/api/invoices")
        response.EnsureSuccessStatusCode()
        Return Await response.Content.ReadAsStringAsync()
    End Function
End Class
