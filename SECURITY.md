# Security Policy

## Reporting a Vulnerability

Jika Anda menemukan kerentanan keamanan di NARIPO, mohon jangan membuka issue publik. Sebaliknya, kirim email ke:

**Email: security@naripo.com**

Titulo email: `Security Vulnerability Report`

Mohon sertakan:
1. Deskripsi kerentanan
2. Steps untuk mereproduksi
3. Potential impact
4. Suggested fix (jika ada)

## Security Best Practices

### Untuk Users
- Jaga keamanan password Anda
- Jangan share token authentication Anda
- Selalu logout dari perangkat publik
- Update browser Anda ke versi terbaru

### Untuk Developers
- Jangan commit sensitive data (API keys, passwords)
- Gunakan environment variables
- Validate semua input dari user
- Use HTTPS untuk semua requests
- Keep dependencies updated
- Follow OWASP guidelines

## Security Headers

NARIPO menggunakan security headers berikut:
- Content-Security-Policy
- X-Content-Type-Options
- X-Frame-Options
- Strict-Transport-Security (HSTS)

## Dependencies Security

Kami secara rutin meng-update dependencies untuk memastikan tidak ada known vulnerabilities.

Untuk melihat vulnerabilities di project Anda:
```bash
npm audit
```

Untuk memperbaiki:
```bash
npm audit fix
```

## Disclaimer

NARIPO disediakan "AS IS" tanpa warranty. Kami tidak bertanggung jawab atas data loss atau security breaches yang terjadi.

---

Terima kasih telah menjaga keamanan NARIPO! 🔒
