Imports System.Windows.Forms
Imports Newtonsoft.Json

Public Class InvoiceViewerForm
    Inherits Form

    Private listBox As New ListBox()

    Public Sub New()
        Me.Text = "Invoice Viewer"
        Me.Size = New Drawing.Size(600, 400)
        listBox.Dock = DockStyle.Fill
        Me.Controls.Add(listBox)
        LoadInvoices()
    End Sub

    Private Async Sub LoadInvoices()
        Try
            Dim json As String = Await HttpService.GetInvoicesAsync()
            Dim invoices As List(Of Invoice) = JsonConvert.DeserializeObject(Of List(Of Invoice))(json)
            For Each inv In invoices
                listBox.Items.Add($"Invoice ID: {inv.Id} | Amount: {inv.Amount}")
            Next
        Catch ex As Exception
            MessageBox.Show("Error loading invoices: " & ex.Message)
        End Try
    End Sub
End Class
