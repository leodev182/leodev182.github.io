import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { catchError, throwError } from 'rxjs'
import { AuthService } from '../auth/auth.service'

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService)
  const token = auth.token
  if (!token) return next(req)

  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })).pipe(
    catchError(err => {
      if (err.status === 401) auth.logout()
      return throwError(() => err)
    }),
  )
}
